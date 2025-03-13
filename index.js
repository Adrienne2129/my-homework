document.getElementById("username").addEventListener("input", function () {
    this.value = this.value.replace(/\d/g, ""); 
});