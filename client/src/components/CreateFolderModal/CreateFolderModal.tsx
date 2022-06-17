import React from 'react';
import { useHistory } from 'react-router-dom';
import directoryService from '../../services/directory.service';
import notificationsService from '../../services/notifications.service';
import { formComponent } from '../shared/hocs/formComponent';
import { IFormComponentProps } from '../shared/types.forms';
import './CreateFolderModal.css';

const CreateFolderModal: React.FC<IFormComponentProps> = ({ controlChangeHandlerFactory, getFormState }) => {
    const history = useHistory();
    
    const nameOnChangeHandler = controlChangeHandlerFactory('folderName');

    const hideModal = () => {
        document.getElementsByClassName('modal')[0].classList.remove('show');
    }

    const submitHandler = async () => {
        const { folderName } = getFormState();
        const parentId = location.pathname.includes('/folders/') ? location.pathname.split('/').pop() : null;
        const formData = {
            dirName: folderName,
            parentId: parentId
        }

        const token = localStorage.getItem('auth-token') || '';

        directoryService.createDirectory(formData, token).then(res => {
            if (res.error) {
                notificationsService.showError(res.error);
                return;
            }

            notificationsService.showSuccess(`Folder ${folderName} created successfully!`);

            hideModal();
            (document.querySelector('.modal #dialog input') as HTMLInputElement).value = '';
            history.push(`/folders/${res.id}`);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <section className="modal" id='modal'>
            <section className="dialog-container">
                <section id="dialog">
                    <header>
                        <h1 className="title">New Folder</h1>
                    </header>
                    <main>
                        <input type="text" name="name" onChange={nameOnChangeHandler} />
                    </main>
                    <footer>
                        <button className="close-modal" onClick={hideModal}>Close</button>
                        <button className="add-folder" onClick={submitHandler}>Add</button>
                    </footer>
                </section>
            </section>
        </section>
    );
}

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    folderName: ''
}

export default formComponent(CreateFolderModal, initialState);