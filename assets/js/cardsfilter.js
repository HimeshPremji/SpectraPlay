const pcButton = document.getElementById("consoleFilterPC");
const xboxButton = document.getElementById("consoleFilterXbox");
const ps5Button = document.getElementById("consoleFilterPlayStation5");
const nintendoButton = document.getElementById("consoleFilterNintendo");
const popularButton = document.getElementById("FilterPopularGames");

// Get all games for each console
const pcgames = document.querySelectorAll(".pcgamesdiv");
const xboxgames = document.querySelectorAll(".xboxgamesdiv");
const ps5games = document.querySelectorAll(".ps5gamesdiv");
const nintendogames = document.querySelectorAll(".nintendogamesdiv");
const populargames = document.querySelectorAll(".populargamesdiv");

// Hide or ShOw all games by default
const allgames = document.querySelectorAll(".pcgamesdiv, .xboxgamesdiv, .ps5gamesdiv, .nintendogamesdiv, .populargamesdiv");
function hidegames() {
    allgames.forEach(abc => {
        abc.style.display = "none";
        
    });
};
popularButton.addEventListener("click", function () {
    hidegames()
    populargames.forEach(abc => {
        abc.style.display = "block";
    })
});
pcButton.addEventListener("click", function () {
    hidegames()
    pcgames.forEach(abc => {
        abc.style.display = "block";
    })
});
xboxButton.addEventListener("click", function () {
    hidegames()
    xboxgames.forEach(abc => {
        abc.style.display = "block";
    })
});
ps5Button.addEventListener("click", function () {
    hidegames()
    ps5games.forEach(abc => {
        abc.style.display = "block";
    })
});
nintendoButton.addEventListener("click", function () {
    hidegames()
    nintendogames.forEach(abc => {
        abc.style.display = "block";
    })
});

function loadEverythinginGamesSection(){
    hidegames()
    populargames.forEach(abc => {
        abc.style.display = "block";
    })
}
loadEverythinginGamesSection();








// Get buttons for filtering consoles
const popularConsolesButton = document.getElementById("brandsFilterTopConsoles");
const sonyCompanyButton = document.getElementById("brandsFilterSony");
const microsoftCompanyButton = document.getElementById("brandsFilterMicrosoft");
const nintendoCompanyButton = document.getElementById("brandsFilterNintendo");

// Get all consoles for each category
const sonyConsoles = document.querySelectorAll(".sonyconsolesdiv");
const microsoftConsoles = document.querySelectorAll(".microsoftconsolesdiv");
const nintendoConsoles = document.querySelectorAll(".nintendoconsolesdiv");
const popularConsoles = document.querySelectorAll(".popularconsolesdiv");

// Hide all consoles by default
const allConsoles = document.querySelectorAll(
  ".sonyconsolesdiv, .microsoftconsolesdiv, .nintendoconsolesdiv, .popularconsolesdiv");

function hideConsoles() {
  allConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "none";
  });
}

// Event listeners for filter buttons
popularConsolesButton.addEventListener("click", function () {
  hideConsoles();
  popularConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "block";
  });
});

sonyCompanyButton.addEventListener("click", function () {
  hideConsoles();
  sonyConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "block";
  });
});

microsoftCompanyButton.addEventListener("click", function () {
  hideConsoles();
  microsoftConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "block";
  });
});

nintendoCompanyButton.addEventListener("click", function () {
  hideConsoles();
  nintendoConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "block";
  });
});

// Load default view
function loadDefaultConsoles() {
  hideConsoles();
  popularConsoles.forEach((consoleCard) => {
    consoleCard.style.display = "block"; // Default to show popular consoles
  });
}

loadDefaultConsoles();
