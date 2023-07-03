import { formatDistanceStrict, formatDistanceToNow } from "date-fns";
interface Data {
    month: number;
    num: number;
    link: string;
    year: number;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: number;
  }
  
  const main = async () => {
    async function fetchXKCD() {
      const urlParams = new URLSearchParams();
      urlParams.append('email', 'k.khaddour@innopolis.university');
      try {
        const response = await fetch('https://fwd.innopolis.university/api/hw2?' + urlParams.toString());
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching comic identifier:', error);
      }
    }
  
    async function fetchId(id: string) {
      try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching comic identifier:', error);
      }
    }
    const id = await fetchXKCD();
    const _data: Data = await fetchId(id);
    const img = document.getElementById('img') as HTMLImageElement;
    const title = document.getElementById('title') as HTMLParagraphElement;
    const timeTillNow=document.getElementById('timeTillNow') as HTMLParagraphElement;
    const date = document.getElementById('date') as HTMLParagraphElement;
    img.src = _data.img;
    img.alt = _data.alt;
    title.textContent = _data.safe_title;
    const event = new Date(Date.UTC(_data.year, _data.month, _data.day));
    timeTillNow.textContent="it was published "+formatDistanceToNow(event)+" ago";
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = event.toLocaleDateString('en-DE', options);
  };
  
  main();
  