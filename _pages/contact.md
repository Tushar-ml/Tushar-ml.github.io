---
title: Suggestions
permalink: "/contact.html"
---

<form action="https://formspree.io/f/{{site.formspree_id}}" method="POST">    
<p class="mb-4">Please send your message or topic recommendations to {{site.name}}. I will try to write on it as soon as possible</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Topic: Is Black Hole a Quantum or Classical Object*" required></textarea>    
<input class="btn btn-success" type="submit" value="Send">
</form>