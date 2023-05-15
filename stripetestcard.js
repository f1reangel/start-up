 // Stripe.js
 var stripe = Stripe('pk_test_1234567890');
 var elements = stripe.elements();
 var card = elements.create('card');
 card.mount('#card-element');