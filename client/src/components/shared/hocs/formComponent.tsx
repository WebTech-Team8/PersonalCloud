import React from 'react';
import { IForm, IFormComponentProps, IFormState } from '../types.forms';

export function formComponent(Component: React.FC<IFormComponentProps>, initialState: IForm) {
    return class extends React.Component {
        state: IFormState = {
            form: initialState,
            errors: null // property for future validations
        };

        controlChangeHandlerFactory = (name: string) => {
            return (event: React.ChangeEvent<HTMLInputElement>) => {
                let id: ReturnType<typeof setTimeout> | null = setTimeout(() => {
                    if (id) { 
                        clearTimeout(id);
                        id = null;
                    }
                    const newValue = event.target.value;
                    this.setState((prevState: IFormState) => {
                        return {
                            form: { ...prevState.form, [name]: newValue }
                        };
                    });
                    id = null;
                }, 300);
            }
        }

        getFormState = () => {
            return this.state.form;
        }

        render() {
            return <Component
                {...this.props}
                controlChangeHandlerFactory={this.controlChangeHandlerFactory}
                getFormState={this.getFormState} />
        }
    };
}