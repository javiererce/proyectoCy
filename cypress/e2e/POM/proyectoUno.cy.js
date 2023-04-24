///<reference types="Cypress" />
require('@cypress/xpath');
import CheckBox from '../../Pages/proyectoUno';
const checkBox = new CheckBox;

describe('Practica con CheckBox', () => {
    beforeEach(()=>{
        checkBox.visitCheckBox()
    });
    it('logearse con datos validos', () => {
        checkBox.logDatosValidos();
    });
    it('logearse con mail NO validos', () => {
        checkBox.logDatosMailNoValidos();
    });
});
