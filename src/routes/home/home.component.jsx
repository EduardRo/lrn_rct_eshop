import React from "react";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  // initialize some array
  const categories = [
    {
      id: 1,
      title: "Shirts",
      imageUrl:
        "https://merer.ro/wp-content/uploads/2021/09/merer-desktop-poza-04-traditionale.jpg",
    },
    {
      id: 2,
      title: "Perfumes",
      imageUrl:
        "https://merer.ro/wp-content/uploads/2021/12/amaze-him-ajmal-merer.ro_-1024x1024.jpg",
    },
    {
      id: 3,
      title: "Bracelets",
      imageUrl:
        "https://merer.ro/wp-content/uploads/2019/03/22-8-1024x1024.jpg",
    },
    {
      id: 4,
      title: "Women",
      imageUrl:
        "https://merer.ro/wp-content/uploads/2022/08/camasa-femei-vascoza-merer.ro_-1024x1024.jpg",
    },
    {
      id: 5,
      title: "Men",
      imageUrl:
        "https://merer.ro/wp-content/uploads/2022/09/camasa-din-bumbac-merer.ro_-1024x1024.jpg",
    },
  ];
  return (
    <div>
      
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
