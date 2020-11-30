import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeScreen = ({ children }) => {
    const myRefDiv = useRef(null);
	const [vanta, setVanta] = useState(false); //vanta sera inicializado en 0
	
    //Primer Render el valor es null porque se le asigna el valor inicial.
    console.log("myrefDiv.current",myRefDiv.current)

	/*La funcion se va a "invocar" ante la segunda renderización, en este punto ya va a contener
	  un valor en "myRefDiv.current"*/
    useEffect(() => {
		console.log("myRefDiv.current ( en UseEffect)", myRefDiv.current);

		if(!vanta){
			setVanta(Clouds({
				THREE,
				el: myRefDiv.current
			}));
		}
		// al salir de la pantalla debemos de detener el efecto y des-asociar los recurso (dv + vanta effect)
		return () => {
			//Dentro de esta funcióin se va a realizar la tarea de destruir los recursos tomados por "vanta"
			if(vanta) {
				vanta.destroy()
				console.log("Libero los recursos")
			}
		}
	},[vanta]);

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen;