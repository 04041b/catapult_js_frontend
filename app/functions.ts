export async function launchreq() {
    let req = await fetch("/api/launch");
    let statushtml = document.getElementById("status") as HTMLElement ;
    statushtml.innerText = await req.text();

}

