import { useState } from "react";

//Gerenciamento de estado, para controlar o step que o usuario está no momento
export function useForm(steps) {

    const [currentStep, setCurrentStep] = useState(0); // definindo o primeiro passo, ou a step inicial

    function changeStep(i, e){ // i = indice e =  evento
        if (e) e.preventDefault();

        if(i < 0 || i >= steps.length) return // aqui definido a quantidades de steps 

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    };
}