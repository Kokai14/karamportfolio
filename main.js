const main = async () => {
    async function fetchXKCD() {
        const urlParams = new URLSearchParams();
        urlParams.append('email', 'k.khaddour@innopolis.university'); 
        try {
            const response = await fetch('https://fwd.innopolis.university/api/hw2?'+urlParams.toString());
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching comic identifier:', error);
        }
    }
    async function fetchId(id) {
        try {
            const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching comic identifier:', error);
        }
    }
    id = await fetchXKCD();
    _data = await fetchId(id);
    img=document.getElementById('img');
    title=document.getElementById('title');
    date=document.getElementById('date')
    img.src =_data["img"];
    img.alt=_data["alt"];
    title.textContent=_data["safe_title"];
    const event = new Date(Date.UTC(_data["year"],_data["month"],_data["day"]));
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    date.textContent=event.toLocaleDateString('en-DE', options);
}
main()