
document.querySelector('#add-time').addEventListener('click', cloneField);

function cloneField() {
      const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

      const fields = newFieldContainer.querySelectorAll('input');

      fields.forEach( (field) => {
            field.value = "";
      })


      //Add on the page. Where?
       const addFieldContainer = document.querySelector("#schedule-items").appendChild(newFieldContainer);
}