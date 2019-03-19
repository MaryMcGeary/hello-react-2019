import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render () {
        const logoUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAF0AVgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADUQAAEEAQIEAwUGBwEAAAAAAAEAAgMRBAUSEyExQRQiUQZhcZGhFSMyYoGxFkJSktHh8Af/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwUC/8QAIBEBAQABBAEFAAAAAAAAAAAAAAERAgMhYTEEEhNBQv/aAAwDAQACEQMRAD8A+4oiICIiAi5zSshbueaBcGj4k0PqVuCgyiIgIiICIiAiIgLBNCysqDrjXu0jKEfXhnp3Hf6WgovaHVWwarocDpAxuTnOBs8qY1zWj+8tK5+w49qhmaj/ABLfBscHds/FZvbt/lquv+V5z/0vDdPhYmfBbooHG67MlpzXf3At+SmexbfaPI0ZupS67N4XcWsgMDZjtaaLiTz7dAbr5KHuvyYa92dE9BNyWc8XPnObeMdPoyKLgOyTAPFvhkf2khBDXj1ok18ypSuyBERAREQEREBYIsUeiyiDzGfhtxQ/CyI2yYM4c2PefLTvxROPYHqD2I+Kh+x0GRoWRNpn3k+mySF+PKR58dx6xyDt6h3Q8+fMBXPtbDlyaFkSafTsmAcVkZFtlrqwjvYv9aUPFxXT4OLm4zfFY0sLJIxxCyWNrhdNf3HPoVziXV2vp1a9OzZ+bfHc+1xpxEcuVitPkhk8vuDgDX6G/opyqMWZsERgw8DLZK82TKw1Z7ucTzVuukBERAREQERc8mePGx5J53bYoml73UTQAsnkg6IeSgM1jAfJHG2Y8SSXgtYWOB37N9EVy8oJ59lJyMqDHdC2eVsbppOHEHGt7qJoe+gfkg0kkyXcoYG16yPr9gVHwsbKw4RDE3H4bSdrdzvKCbocugvkn2hiS8bZkS3BOMeRrWOtshogVXo5pvpRvouP2lgiGSfxeTwoy9r38N20Fjtrhe3qHWP0PohmrSMvI+8a1p/K6wt1ByM7GwiRkTSCtgNsJ5vdtb0Hd3Jd5MuGPIhx3uIlmDixu08wKvn0HUdUHdFDZqmJIJdkjiYpxjvbw3WJORqqvoQb6Ub6KYgIiICi6rBJlaZl40O3iTQvjbvNCyCBZoqUiCik0aSObTZ8SKLiw5InyTJM63/cPi5Gj/UPQUCtdW0/L1OKUSSwQTsjBxtkm4NmDtwLrb0BbH096v1o6JjjZaLu7/74IKqPCc7XItReIG3i8OYMlJuQHkQKo0C8X1p1KHBosjdG1HFkmjbk5M2S9hEznMAkmfIzkeh8wBodj1XoODHtLdgokkj4rHh4v6BXogp9UxMvOgcR4ZkhlxnNYZjREUwkdz29+g5LtLFnT6liZTY8UiAStLBO7o4Nr+X1B/2rLgRcvIORsLZkTI/wCkFbDp0o1tuoSRxN3YwbKGSE/eA8iBVGgXDd1oq1REBERARFzyIuPC6PiPj3D8cZpw+BQb2lqA/TGnYPF5bWtNgCX3J9mAtA8bm8hV8az25/Hl9Sgn2lhQmaftLj4vLJc3bZk99+izFgiKVsvisp5aK2vlJaevUdO/7IJqKFJgRvdG575Dw2Bot13TgbJ6k+UfVc/smHbtEkvoT5SSKcKNj8x+iCxRVg0aENoT5FWT1bZ5tPWvyj5lWaAiIg/9k="                   
        return (
        <header>
        <img src={logoUrl} alt="Logo" style={{width: '20vw'}} />
        Header
        </header>
        );
    }
}

export default Header;