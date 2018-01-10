const $form = $('#suscribete')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit (function (ev){
	ev.preventDefault()

	const error = Math.random() > 0.5
	$formGroup.removeClass().addClass('form-goup')
	$formControl.removeClass().addClass('form-control')
	$formGroup.addClass( error ? 'has-danger' : 'has-success')
	$formControl.addClass( error ? 'form-control-danger' : 'form-control-success')
	$formGroup.find('.form-control-feeback').remove()

	var el;
	if (error) {
		el =$ ('<div>', { html: 'Ha ocurridoun error'})
	} else {
		el = $('<div>', { html: 'Te enviaremos todas las novedades'})
	}
	el.addClass('form-control-feedback')
	$formGroup.append(el)
}) 
function mostrarModal() {
	
	$('#modalOferta').modal()	

	$('#btnNoRegistrar').click(function (ev) {
		localStorage.noMostrarModal = true
	})
}
