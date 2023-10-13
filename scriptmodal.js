
// Showing Modal
document.querySelector("#instructions").addEventListener('click', ()=> {
    const instructionsModal = new bootstrap.Modal(document.querySelector("#modalInstructions"));
    instructionsModal.show();

    // Closing instructions modal
    document.querySelector("#closeInstruction").addEventListener('click', ()=> {
        instructionsModal.hide();
    });
});