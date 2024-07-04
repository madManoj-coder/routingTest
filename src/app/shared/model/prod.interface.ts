export interface Iprod {
    pName: string;
    pStatus: pStatus;
    id: string;
    canReturn: 0 | 1;
}

export type pStatus = "In-progress" | "Delivered" | "Dispatched";