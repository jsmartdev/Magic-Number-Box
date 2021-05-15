/* eslint-disable */

/* Template Functions */

function introTemplate() {
    return `<div class="text-wrap">
                <p>Find the ancient power locked within your very own magical number. The number which resonates through your entire life.</p>
            </div>
            <form class="btn-wrap" id="begin">
                <input class="button" type="submit" value="Begin">
            </form>`;
}

function formTemplate() {
    return `<form name="dates" id="dates">
                <div class="form-wrap">
                    <div class="box">
                        <label>Your Birthday</label><br>
                        <input type="number" title="your birth month (1-12)" id="your-month" name="your-month" min="1" max="12" required><br>
                        <input type="number" title="your day of birth (1-31)" id="your-day" name="your-day" min="1" max="31" required>
                    </div>
                    <div class="box">
                        <label>Mother's Birthday</label><br>
                        <input type="number" title="mother's birth month (1-12)" id="mom-month" name="mom-month" min="1" max="12" required><br>
                        <input type="number" title="mother's day of birth (1-31)" id="mom-day" name="mom-day" min="1" max="31" required>
                    </div>
                    <div class="box">
                        <label>Father's Birthday</label><br>
                        <input type="number" title="father's birth month (1-12)" id="dad-month" name="dad-month" min="1" max="12" required><br>
                        <input type="number" title="father's day of birth (1-31)" id="dad-day" name="dad-day" min="1" max="31" required>
                    </div>
                </div>    
                <div class="btn-wrap">
                    <input class="button" type="submit" title="Submit your answers" id="dates">
                </div>
            </form>`;
}

function responseTemplate() {
    return `<div class="text-wrap">
                <p>Behold, your secret magical number is ${magic.value}.</p>
            </div>
            <form id="return" class="btn-wrap">
                <input class="button" type="submit" value="Return">
            </form>`;
}

/* Render Functions */

function renderIntro() {
    template = introTemplate();
    $('main').html(template);
}

function renderForm() {
    template = formTemplate();
    $('main').html(template);
}

function renderResponse() {
    template = responseTemplate();
    $('main').html(template);
}

/* Arithmetic Function */

function getNum() {
    /* declare variables for all form inputs */

    let a = document.getElementById("your-month").value;
    let b = document.getElementById("your-day").value;
    let c = document.getElementById("mom-month").value;
    let d = document.getElementById("mom-day").value;
    let e = document.getElementById("dad-month").value;
    let f = document.getElementById("dad-day").value;

    /* if your-month >= your-day, let g = your-month - your-day */
    /* else let a = your-day - your-month */

    if (a >= b) {
        let g = a - b;
    }
    else {
        let g = b - a;
    }

    /* if mom-month >= mom-day, let h = mom-month - mom-day */
    /* else let b = mom-day - mom-month */

    if (c >= d) {
        let h = c - d;
    }
    else {
        let h = d - c;
    }

    /* if dad-month >= dad-day, let i = dad-month - dad-day */
    /* else let c = dad-day - dad-month */

    if (e >= f) {
        let i = e - f;
    }
    else {
        let i = f - e;
    }

    /* if g >= h, let j = g - h */
    /* else let j = i - h */

    if (h >= i) {
        let j = h - i;
    }
    else {
        let j = i - h;
    }

    /* if d >= c, let magic = d - c; */
    /* else let magic = c - d */

    if (g >= j) {
        let magic = g - j;
    }
    else {
        let magic = j - g;
    }

    /* return magic number */
    return magic;
}

/* Event Handlers */

function handleBegin() {
    $('main').on("submit", "#begin", function(event) {
        event.preventDefault();
        renderForm();
    });
};

function handleSubmit() {
    $('main').on("submit", "#dates", function(event) {
        event.preventDefault();
        getNum();
        renderResponse();
    })
}

function handleReturn() {
    $('main').on("submit", "#return", function(event) {
        event.preventDefault();
        renderIntro();
    });
}

/* Main Function */

function main() {
    renderIntro();
    handleBegin();
    handleSubmit();
    handleBack();
}

$(main);


