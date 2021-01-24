class memes {
    id;
    name;
    image;
    dateModified;

    constructor(id, name, image, dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }

    show() {
        document.querySelector("#name").innerHTML = this.name;
        document.querySelector("#img").src = this.image;
        document.querySelector("#date").innerHTML = this.dateModified;
    }

    update(data) {
        this.name = data.name;
        this.image = data.image
    }

}

class memesCollection {
    id;
    name;
    owner;
    memes = [];

    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }

    add(meme) {
        this.memes.push(meme);
    }

    updateMeme(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes[i].update(data);
            }
        }
    }

    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes.splice(i, 1);
            }
        }
    }
}

let me1 = new memes(1, "aa", "https://sa.kapamilya.com/absnews/abscbnnews/media/2020/life/11/30/20201130-kim-jisoo-ig.jpg?ext=.jpg",'dd' );
let me2 = new memes(2, "bb", "https://sa.kapamilya.com/absnews/abscbnnews/media/2020/life/11/30/20201130-kim-jisoo-ig.jpg?ext=.jpg", 'dd');
let me3 = new memes(3, "cc", "https://sa.kapamilya.com/absnews/abscbnnews/media/2020/life/11/30/20201130-kim-jisoo-ig.jpg?ext=.jpg", 'dd');
let memeCollection = new memesCollection(1, "MemesCollection", "rr", [me1, me2, me3]);
me2.show();
memeCollection.add(me3);
memeCollection.updateMeme(2, { name: "1234", image: "https://sa.kapamilya.com/absnews/abscbnnews/media/2020/life/11/30/20201130-kim-jisoo-ig.jpg?ext=.jpg" });
memeCollection.delete(3);
console.log(memeCollection);

me2.show();
