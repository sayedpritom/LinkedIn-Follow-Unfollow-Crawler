const followings = [
    "Afnan Ferdousi",
    "Syeda Tamanna Sheme",
    "Arthur Hareng",
    "Jafrul Hossain",
    "Arafat Hossain",
    "Nirjhor Anjum",
    "Haider Ali",
    "Martinez Baker",
    "Hossain Azad",
    "Md. Imam Hasan",
    "Md. Omar Faruq",
    "Tanjir Al Mamun",
    "Kimo Liang",
    "Nazia Sultana",
    "Andriy Lazaryev",
    "Bhavesh Patel",
    "Mariusz Szatkowski",
    "Paul Clark",
    "Martin Krcho",
    "Jorge A. Gonzalez",
    "Christopher Morris 👋",
    "Kharis Sulistiyono",
    "Luba K.",
    "Marc Cuenca",
    "Javier González Moya",
    "S.J. Sinjab, MBA",
    "Will Rippetoe",
    "Frank Ceffalo III",
    "Holden Case",
    "Gary Scheidegger",
    "Juan Rios",
    "Hayfaa Chalabi",
    "BobWP / Do the Woo",
    "Brandon Cercedo Cortez",
    "Thomas Woodfin ✔",
    "Flavia Soreca",
    "Souptik Datta",
    "Benjamin Rojas",
    "Tushar Patel",
    "Manuel Garrido",
    "Kristina Ottesen",
    "Anna Gargioni",
    "Larry Swanson",
    "Evan Risas",
    "Christopher Hinds",
    "Julie Stålevik",
    "Inge Forberg",
    "Waseem Abbas",
    "M Rizal Adi Nugroho",
    "Russ Mate",
    "Hayley Belanger",
    "Augusto Silva",
    "Wilson Lavrador",
    "Carlos Almada",
    "Adrian Try",
    "Martine Tauland",
    "Mahmoud Al Baghdady",
    "Cesar Alberto Perez Tavera",
    "Vivian Pedersen",
    "Kate M. Walsh",
    "Juliano Seus",
    "Jodie Fiorenza",
    "Eduarda Cougo",
    "Joana D.",
    "Albert Sanchez",
    "Magnolia Wren",
    "Brian Messenlehner",
    "Siamul Haque khan (Siam)",
    "A S M Asaduzzaman",
    "Hector Luna",
    "Habibulla Sonet",
    "Jordy Scholing",
    "Elizabeth Westbrook",
    "Filipe Oliveira",
    "Jan Krakovský",
    "Karel Hudera",
    "MD MAHBUBUL HUQ",
    "Michael Gooding",
    "Francis Perdo",
    "Grzegorz Durtan",
    "Mostafijur Rahman",
    "UI Ninja",
    "MD Rayhanul Islam",
]

// Name of user
// x[0].parentNode.parentNode.parentNode.getElementsByClassName('entity-result__title-text')[0].getElementsByClassName('app-aware-link')[0].childNodes[2] 


(() => {

    let count = 0;
    function getAllButtons() {
        const a = document.querySelectorAll('button.artdeco-button--2');
        const z = Array.from(a).filter(item => {
            if(item.innerText === 'Following' || item.innerText === 'Follow') {
                return item
            }
        })
      return z || [];
    }
    async function unfollowAll() {
      const buttons = getAllButtons();
  
      for (let button of buttons) {
        count = count + 1;
  
        window.scrollTo(0, 260);

        const userName = button.parentNode.parentNode.parentNode.getElementsByClassName('entity-result__title-text')[0].getElementsByClassName('app-aware-link')[0].innerText;

        
        if(button.innerText === "Follow") {
            button.click();
            console.log(button.innerText, userName, count);
        }
  
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    async function run() {
      await unfollowAll();
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const buttons = getAllButtons();
      if (buttons.length) run();
    }
    run();
  })();



//   Unfollow all


(() => {

    const followings = [
        "Walter Lee",
        "Afnan Ferdousi",
        "Syeda Tamanna Sheme",
        "Arthur Hareng",
        "Jafrul Hossain",
        "Arafat Hossain",
        "Nirjhor Anjum",
        "Haider Ali",
        "Martinez Baker",
        "Hossain Azad",
        "Md. Imam Hasan",
        "Md. Omar Faruq",
        "Tanjir Al Mamun",
        "Kimo Liang",
        "Nazia Sultana",
        "Andriy Lazaryev",
        "Bhavesh Patel",
        "Mariusz Szatkowski",
        "Paul Clark",
        "Martin Krcho",
        "Jorge A. Gonzalez",
        "Christopher Morris 👋",
        "Kharis Sulistiyono",
        "Luba K.",
        "Marc Cuenca",
        "Javier González Moya",
        "S.J. Sinjab, MBA",
        "Will Rippetoe",
        "Frank Ceffalo III",
        "Holden Case",
        "Gary Scheidegger",
        "Juan Rios",
        "Hayfaa Chalabi",
        "BobWP / Do the Woo",
        "Brandon Cercedo Cortez",
        "Thomas Woodfin ✔",
        "Flavia Soreca",
        "Souptik Datta",
        "Benjamin Rojas",
        "Tushar Patel",
        "Manuel Garrido",
        "Kristina Ottesen",
        "Anna Gargioni",
        "Larry Swanson",
        "Evan Risas",
        "Christopher Hinds",
        "Julie Stålevik",
        "Inge Forberg",
        "Waseem Abbas",
        "M Rizal Adi Nugroho",
        "Russ Mate",
        "Hayley Belanger",
        "Augusto Silva",
        "Wilson Lavrador",
        "Carlos Almada",
        "Adrian Try",
        "Martine Tauland",
        "Mahmoud Al Baghdady",
        "Cesar Alberto Perez Tavera",
        "Vivian Pedersen",
        "Kate M. Walsh",
        "Juliano Seus",
        "Jodie Fiorenza",
        "Eduarda Cougo",
        "Joana D.",
        "Albert Sanchez",
        "Magnolia Wren",
        "Brian Messenlehner",
        "Siamul Haque khan (Siam)",
        "A S M Asaduzzaman",
        "Hector Luna",
        "Habibulla Sonet",
        "Jordy Scholing",
        "Elizabeth Westbrook",
        "Filipe Oliveira",
        "Jan Krakovský",
        "Karel Hudera",
        "MD MAHBUBUL HUQ",
        "Michael Gooding",
        "Francis Perdo",
        "Grzegorz Durtan",
        "Mostafijur Rahman",
        "UI Ninja",
        "MD Rayhanul Islam",
    ]

    let count = 0;
    function getAllButtons() {
        const a = document.querySelectorAll('button.artdeco-button--2');
        const z = Array.from(a).filter(item => {
            if(item.innerText === 'Following' || item.innerText === 'Follow') {
                return item
            }
        })
      return z || [];
    }
    async function unfollowAll() {
      const buttons = getAllButtons();
  
      for (let button of buttons) {
        count = count + 1;
  
        window.scrollBy(0, 50);

        const userName = button.parentNode.parentNode.parentNode.getElementsByClassName('entity-result__title-text')[0].getElementsByClassName('app-aware-link')[0].innerText;

        
        if(followings.includes(userName) && button.innerText === "Follow") {
            button.click();
            console.log(button.innerText, userName, count);
        }
  
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    async function run() {
      await unfollowAll();
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const buttons = getAllButtons();
      if (buttons.length) run();
    }
    run();
  })();