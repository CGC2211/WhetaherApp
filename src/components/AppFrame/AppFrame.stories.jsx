import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
	title: 'AppFrame',
	component: AppFrame
}

export const AppFrameExample = () => (
	<Router>
		<AppFrame>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, porro aliquid quas officia labore eveniet et iure dolorum corrupti cumque necessitatibus dolores, quae architecto repudiandae aut accusamus ipsa tempora sit.
		</AppFrame>
	</Router>
)