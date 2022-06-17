import React from 'react';
import './CreateFolderModal.css';

const CreateFolderModal: React.FC = () => {

    const hideModal = () => {
        document.getElementsByClassName('modal')[0].classList.remove('show');
    }

    return (
        <section className="modal" id='modal'>
            <section className="dialog-container">
                <section id="dialog">
                    <header>
                        <h1 className="title">New Folder</h1>
                    </header>
                    <main>
                        <input type="text" name="name" />
                    </main>
                    <footer>
                        <button className="close-modal" onClick={hideModal}>Close</button>
                        <button className="add-folder">Add</button>
                    </footer>
                </section>
            </section>
        </section>
    );
}

export default CreateFolderModal;