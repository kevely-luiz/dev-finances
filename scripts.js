const Modal = {
    open(){
        //abrir modal
        //adicionar class active no modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        //fechar modal
        //retirar a classe active do modal
        document.querySelector('.modal-overlay').classList.remove('active');

    }
}