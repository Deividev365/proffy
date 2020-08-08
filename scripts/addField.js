
document.querySelector('#add-time').addEventListener('click', cloneField );

function cloneField() {
      //duplicate the fields. which fields?
      const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

      // Clean up the fields. Which fields?
      const fields = newFieldContainer.querySelectorAll('input');

      fields.forEach( (field) => {
            // get the field and then clean it up for the next ones
            fields.value = "";
      })


      //Add on the page. Where?
       const addFieldContainer = document.querySelector("#schedule-items").appendChild(newFieldContainer);
}