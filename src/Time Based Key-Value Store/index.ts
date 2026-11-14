type MapItem = {
    timestamp: number;
    value: string;
};

class TimeMap {
    private keyStore;
    constructor() {
        this.keyStore = new Map<string, MapItem[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key)!.push({
            timestamp,
            value,
        });
    }

    get(key: string, timestamp: number): string {
        const items = this.keyStore.get(key);
        if (!items || items.length === 0) return "";
        let bestCandidate: MapItem | undefined;
        const BN = (l: number, r: number) => {
            if (l > r) return;
            let mid = Math.floor((l + r) / 2);
            let midItem = items[mid];
            if (midItem.timestamp <= timestamp) {
                bestCandidate = midItem;
                BN(mid + 1, r);
            } else {
                BN(l, mid - 1);
            }
        };
        BN(0, items.length - 1);
        return bestCandidate ? bestCandidate.value : "";
    }
}
