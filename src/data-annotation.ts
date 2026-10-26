import * as cheerio from "cheerio";

type ROW = [x: number, character: string, y: number];

async function fetchingDocument(url: string): Promise<any> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(`Failed to fetch document: ${response.status} ${response.statusText}`);
    }
    const data = await response.text();
    return data;
}

function extractTableData(data: any): ROW[] {
    const $ = cheerio.load(data);
    const tableData: ROW[] = [];

    $(".doc-content table tr:not(:first-child)").each((_, row) => {
        const rowData: ROW = [0, "", 0];
        $(row)
            .find("td span")
            .each((i, cell) => {
                const character = $(cell).text();
                rowData[i] = isNaN(parseInt(character))
                    ? character
                    : parseInt(character);
            });
        tableData.push(rowData);
    });
    return tableData;
}

function fill2DArray(tableData: ROW[]): string[][] {
    const maxX = Math.max(...tableData.map(row => row[0]));
    const maxY = Math.max(...tableData.map(row => row[2]));
    const array2D: string[][] = Array.from({ length: maxY + 1 }, () =>
        Array(maxX + 1).fill(" "),
    );
    for (const [x, character, y] of tableData) {
        array2D[y][x] = character;
    }
    return array2D;
}
function print2DArray(array2D: string[][]): void {
    while (array2D.length) {
        const row = array2D.pop()!;
        console.log(row.join(""));
        // console.log(' '.repeat(row.length));
    }
}

async function extractMessage(url: string): Promise<void> {
    const data = await fetchingDocument(url);
    const tableData: ROW[] = extractTableData(data);
    const array2D: string[][] = fill2DArray(tableData);
    print2DArray(array2D);
}

extractMessage("https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub")

extractMessage("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")


