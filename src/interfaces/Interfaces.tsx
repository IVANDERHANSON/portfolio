export interface Image {
    Source: string;
    Alternative: string;
}

export interface JourneyProps {
    Position: string;
    Type: string;
    OrganizationName: string;
    Periode: string;
    Place: string;
    OrganizationImage: Image;
    Description: string;
    Images: Image[];
}