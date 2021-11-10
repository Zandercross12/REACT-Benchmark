const JavascriptList = () => {
// I put the javascript on this page because I won't need it anywhere else.

  function removeDupes(value, index, array) {
    return array.indexOf(value) === index;
  }

  const names1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
  const names2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

  let both = names1.concat(names2);

  both = both.filter(removeDupes);

  function myFunction() {
    
    if (document.getElementById("alreadyList")) {
      alert("The link has already been activated!");
      return;
    }

    const ul = document.createElement('ul');
    ul.setAttribute("id", "alreadyList");

    both.forEach(function(name) {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });

    const list = document.getElementById("list");
    list.appendChild(ul);

  }

  return (
    <div className="jslist">
      <h1 className="heading">Heading</h1>
      <h1> One</h1><br /><br />
      <p>
        Remove the duplicates in 2 Javascript objects and output the list of
        distinct names in an unordered list when{" "}
     
      <button onClick={myFunction}>this link</button>
    
        {" "}
        is clicked. If the operation has been completed already notify the user
        that this has already been done.
      </p>
      <p id="list"></p>
    </div>
  );
};

export default JavascriptList;
