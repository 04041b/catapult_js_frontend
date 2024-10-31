export async function launchreq() {
    let req = await fetch("/api/launch");
    let statushtml = document.getElementById("status") as HTMLElement ;
    statushtml.innerHTML = await req.text();

}

