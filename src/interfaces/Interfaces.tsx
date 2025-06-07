export interface Image {
    Source: string;
    Alternative: string;
}

export interface JourneyProps {
    Position: string;
    Type: string;
    OrganizationName: string;
    Periode: string;
    Duration: string;
    Place: string;
    OrganizationImage: Image;
    Description: string;
    Images: Image[];
}

export interface DialogAction {
    Open: (Images: Image[], Index: number) => void;
    Close: () => void;
}

export interface Language {
    Language: string;
    Description: string;
}
