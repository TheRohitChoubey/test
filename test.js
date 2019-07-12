class TimeTable {
    addDetails = () => {
        let maths = document.getElementById("maths").checked;
        let english = document.getElementById("eng").checked;
        let computer = document.getElementById("com").checked;
        let physics = document.getElementById("phy").checked;
        let chemistry = document.getElementById("chem").checked;
        let sports = document.getElementById("sports").checked;
        let tname = document.getElementById("tname").value;

        let ten = document.getElementById("10").checked;
        let eleven = document.getElementById("11").checked;
        let twelve = document.getElementById("12").checked;
        let one = document.getElementById("1").checked;
        let two = document.getElementById("2").checked;
        let three = document.getElementById("3").checked;
        let four = document.getElementById("4").value;

        let math = [];
        let eng = [];
        let com = [];
        let phy = [];
        let chem = [];
        let sport = [];

        let a10 = [];
        let a11 = [];
        let a12 = [];
        let a1 = [];
        let a2 = [];
        let a3 = [];
        let a4 = [];



        if (maths == true) {
            if (localStorage.getItem("maths") != undefined) {
                math = JSON.parse(localStorage.getItem("maths"));
            }
            math.push(tname);
            localStorage.setItem("maths", JSON.stringify(math));
        }
        if (english == true) {
            if (localStorage.getItem("eng") != undefined) {
                eng = JSON.parse(localStorage.getItem("eng"));
            }
            eng.push(tname);
            localStorage.setItem("eng", JSON.stringify(eng));
        }
        if (computer == true) {
            if (localStorage.getItem("com") != undefined) {
                com = JSON.parse(localStorage.getItem("com"));
            }
            com.push(tname);
            localStorage.setItem("com", JSON.stringify(com));
        }
        if (physics == true) {
            if (localStorage.getItem("phy") != undefined) {
                phy = JSON.parse(localStorage.getItem("phy"));
            }
            phy.push(tname);
            localStorage.setItem("phy", JSON.stringify(phy));
        }
        if (chemistry == true) {
            if (localStorage.getItem("chem") != undefined) {
                chem = JSON.parse(localStorage.getItem("chem"));
            }
            chem.push(tname);
            localStorage.setItem("chem", JSON.stringify(chem));
        }
        if (sports == true) {
            if (localStorage.getItem("sports") != undefined) {
                sport = JSON.parse(localStorage.getItem("sports"));
            }
            sport.push(tname);
            localStorage.setItem("sports", JSON.stringify(sport));
        }

        if (ten == true) {
            if (localStorage.getItem("10") != undefined) {
                a10 = JSON.parse(localStorage.getItem("10"));
            }
            a10.push(tname);
            localStorage.setItem("10", JSON.stringify(a10));
        }

        if (eleven == true) {
            if (localStorage.getItem("11") != undefined) {
                a11 = JSON.parse(localStorage.getItem("11"));
            }
            a11.push(tname);
            localStorage.setItem("11", JSON.stringify(a11));
        }

        if (twelve == true) {
            if (localStorage.getItem("12") != undefined) {
                a12 = JSON.parse(localStorage.getItem("12"));
            }
            a12.push(tname);
            localStorage.setItem("12", JSON.stringify(a12));
        }

        if (one == true) {
            if (localStorage.getItem("1") != undefined) {
                a1 = JSON.parse(localStorage.getItem("1"));
            }
            a1.push(tname);
            localStorage.setItem("1", JSON.stringify(a1));
        }

        if (two == true) {
            if (localStorage.getItem("2") != undefined) {
                a2 = JSON.parse(localStorage.getItem("2"));
            }
            a2.push(tname);
            localStorage.setItem("2", JSON.stringify(a2));
        }

        if (three == true) {
            if (localStorage.getItem("3") != undefined) {
                a3 = JSON.parse(localStorage.getItem("3"));
            }
            a3.push(tname);
            localStorage.setItem("3", JSON.stringify(a3));
        }

        if (four == true) {
            if (localStorage.getItem("4") != undefined) {
                a4 = JSON.parse(localStorage.getItem("4"));
            }
            a4.push(tname);
            localStorage.setItem("4", JSON.stringify(a4));
        }
    }

    loadTimeTable = () => {
        let sTime = document.getElementById("mTime").value;
        let sSub = document.getElementById("mSub").value;

        let tnamet = [];
        let tnames = [];


        if (localStorage.getItem(sTime) != undefined) {
            tnamet = JSON.parse(localStorage.getItem(sTime));
        }

        if (localStorage.getItem(sSub) != undefined) {
            tnames = JSON.parse(localStorage.getItem(sSub));
        }

        let com = [];
        if (tnamet == "" || tnames == "")
            com = "Not Available";
        else {

            com = tnamet.filter((obj) => {
                return tnames.includes(obj);
            })

            let options = "";
            com.forEach((teach) => {
                options += `<option>
                        ${teach}
                        </option>`;
            });

            let records = `<select id="details">
                            ${options}    
                            </select>`;
            document.getElementById('div-details').innerHTML = records;

        }
    }

    saveDetails = () => {
        let mTime = document.getElementById("mTime").value;
        let mSub = document.getElementById("mSub").value;
        let tname = document.getElementById("details").value;
        let clas = document.getElementById("class").value;

        const classdet = [mTime, mSub, tname];

        let det = [];
        let delTime = [];

        if (localStorage.getItem(clas) != undefined) {
            det = JSON.parse(localStorage.getItem(clas));
        }

        const rep = det.find((t) => {
            return mTime == t[0];
        });

        if (rep != undefined) {
            if (localStorage.getItem(mTime) != undefined) {
                delTime = JSON.parse(localStorage.getItem(mTime));
            }
            //free
            delTime.push(rep[2]);
            localStorage.setItem(mTime, JSON.stringify(delTime));


            if (localStorage.getItem(clas) != undefined) {
                det = JSON.parse(localStorage.getItem(clas));
            }

            console.log(rep[2]);
            det = det.filter((t) => {
                return t[0] != rep[2];
            });
            det.push(classdet);
            localStorage.setItem(clas, JSON.stringify(det));
        } else {
            det.push(classdet);
            localStorage.setItem(clas, JSON.stringify(det));
        }

        if (localStorage.getItem(mTime) != undefined) {
            delTime = JSON.parse(localStorage.getItem(mTime));
        }

        delTime = delTime.filter((t) => {
            return t != tname;
        });

        localStorage.setItem(mTime, JSON.stringify(delTime));
        localStorage.setItem(clas, JSON.stringify(det));
        console.log(clas);
        console.log(mTime);
        console.log(mSub);
        console.log(tname);
        alert("Record Added");

    }

    printRows = (det, clas) => {
        console.log(det, clas);
        let rows = '';
        det.forEach((d) => {
            rows += `<tr>
            <td>${clas}</td>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            </tr> `;
        });
        return this.printTable(rows);
    }

    printTable = (rows) => {
        let records = `<table>
                        <tr>
                            <th>Class</th>
                            <th>Time</th>
                            <th>Subject</th>
                            <th>Trainer</th>
                        </tr>
                        ${rows}    
                    </table>`;
        return records;
    }

    loadDetails = () => {
        let det = [];


        if (localStorage.getItem("ClassA") != undefined) {
            det = JSON.parse(localStorage.getItem("ClassA"));
            document.getElementById('div-empsA').innerHTML = this.printRows(det, "ClassA");
        } else {
            document.getElementById('div-empsA').innerText = "No Time Table Available for ClassA";
        }


        det = "";

        if (localStorage.getItem("ClassB") != undefined) {
            det = JSON.parse(localStorage.getItem("ClassB"));
            document.getElementById('div-empsB').innerHTML = this.printRows(det, "ClassB");
        } else {
            document.getElementById('div-empsB').innerText = "No Time Table Available for ClassA";
        }



    }
}

const loadDetailsO = () => {
    const obj = new TimeTable();
    obj.loadDetails();
}

const saveDetailsO = () => {
    const obj = new TimeTable();
    obj.saveDetails();
}

const loadTimeTableO = () => {
    const obj = new TimeTable();
    obj.loadTimeTable();
}

const addDetailsO = () => {
    const obj = new TimeTable();
    obj.addDetails();
    alert("Record Added");
}