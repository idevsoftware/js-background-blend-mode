# js-background-blend-mode

This is a JavaScript based workaround for browsers which don’t support the CSS [`background-blend-mode`(http://css-tricks.com/basics-css-blend-modes/)] property. 


## Usage

Add the `blend-mode.js` file to your HTML file, declare your CSS background properties as you normally would using a `blend-multiply` class name. 


## What's missing?

As of now only the Multiply blend mode is hardcoded but it's enough to get you started. It would be great to be able to apply whatever `background-blend-mode` value you have in your CSS file, but currently reading unsupported CSS property values seems to be impossible. 

I've only tested it on Safari iOS 7, should work on Mavericks as well.


## License

This software is released under the **Anyone But Redbanc Software License** (*ABRSL*). [Learn more](LICENSE.md) about the ABRSL.
