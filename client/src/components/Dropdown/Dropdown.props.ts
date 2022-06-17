interface DropdownOption {
    name: string;
    onclick: () => void;
}

export interface DropdownProps {
    btnName: string;
    options: DropdownOption[];
}