export interface IForm {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
    confirmPassword: string,
    folderName: string
}

export interface IFormState {
    form: IForm,
    errors: object | null
}

export interface IFormComponentProps {
    controlChangeHandlerFactory: (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    getFormState: () => IForm
}