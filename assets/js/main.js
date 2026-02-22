const mailLink = document.getElementById("contact-email");

if (mailLink){
    mailLink.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Link clicked!");
        const part0 = "bWFpbHRvOg=="
        const part1 = "bWVnYW"
        const part2 = "4ud2hpdGV"
        const part3 = "AZGFsLmNh"
        const s0 = atob(part0)
        const s = atob(part1+part2+part3);
        window.location.href = s0+s;
    });
}