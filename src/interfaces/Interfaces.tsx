export interface SectionProp {
    RefProp: React.RefObject<HTMLElement | null>;
}

export interface Image {
    Source: string;
    Alternative: string;
}

export interface JourneyCardProps {
    Position: string;
    Type: string;
    OrganizationName: string;
    Periode: string;
    Place: string;
    OrganizationImage: Image;
    Description: string;
    Images: Image[];
}