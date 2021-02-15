import React from 'react'
import ServicesComp from '../components/ServicesComp'

export const Services = () => {
	return (
		<div className="container content py-4" >
			<h1>About Services</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ultricies velit. Vivamus nec velit id metus aliquet dictum. Duis pulvinar faucibus diam, non fermentum nunc suscipit in. Nulla id odio massa. Proin rhoncus massa sem, quis dictum diam eleifend sit amet. Donec lobortis luctus quam quis rhoncus. Pellentesque porta ante nec neque faucibus, eu tincidunt augue commodo.</p>
			<p>Sed in tortor accumsan, rutrum est non, aliquam felis. Phasellus lacus dui, tristique non lorem at, egestas posuere arcu. Donec eu leo a augue tempor faucibus. In hac habitasse platea dictumst. Quisque elementum libero vitae libero pharetra hendrerit. Sed nec viverra nisl. Nunc feugiat vestibulum nibh, ullamcorper consectetur elit vulputate eu. Nunc bibendum ut massa pulvinar placerat. Aenean nulla nulla, egestas id nisi vitae, rutrum finibus sem. Nunc eros odio, pellentesque eu massa eget, laoreet ullamcorper lacus. Vestibulum eget quam ut nisi tincidunt vulputate. Suspendisse nec mi in libero dignissim semper. Donec quis volutpat odio, ut hendrerit turpis. Ut convallis pharetra nunc.</p>
            <ServicesComp />
        </div>
	)
}