// Function to change the language of the page
function changeLanguage() {
    const language = document.getElementById('languageSelect').value;
    const headerTitle = document.getElementById('headerTitle');
    const headerDesc = document.getElementById('headerDesc');
    const course1Desc = document.getElementById('course1Desc');
    const course2Desc = document.getElementById('course2Desc');
    
    if (language === 'pl') {
        headerTitle.textContent = 'Witaj w kursie programowania!';
        headerDesc.textContent = 'Wybierz kurs i rozpocznij naukę programowania z interaktywnymi zadaniami!';
        
        course1Desc.textContent = 'Poznaj podstawy C#, w tym zmienne, typy danych i składnię.';
        course2Desc.textContent = 'Naucz się tworzyć i używać funkcji w C#.';
    } else if (language === 'en') {
        headerTitle.textContent = 'Welcome to the Programming Course!';
        headerDesc.textContent = 'Choose a course and start learning programming with interactive tasks!';
        
        course1Desc.textContent = 'Learn the basics of C#, including variables, data types, and syntax.';
        course2Desc.textContent = 'Learn how to create and use functions in C#.';
    }
    // Add more languages here if needed
}

// Function to show course details
function showCourseDetails() {
    const selectedCourse = document.getElementById('courseSelect').value;
    const allCourses = document.querySelectorAll('.course-section');
    
    // Hide all courses
    allCourses.forEach(course => {
        course.style.display = 'none';
    });
    
    // Show selected course
    if (selectedCourse) {
        document.getElementById(selectedCourse).style.display = 'block';
    }
}

// Function to start a course
function startCourse(courseId) {
    document.getElementById(courseId + 'Zadanie').style.display = 'block';
    smoothScrollTo(courseId + 'Zadanie');
}

// Smooth scrolling to a specific section
function smoothScrollTo(target) {
    const element = document.getElementById(target);
    window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
    });
}

// Check tasks (same function for each task)
function checkTask1() {
    const userCode = document.getElementById('task1Input').value.trim();
    const correctCode = 'string greeting = "Hello, World!";';
    
    if (userCode === correctCode) {
        document.getElementById('task1Result').textContent = 'Zadania wykonane!';
        document.getElementById('task1Result').style.color = 'green';
    } else {
        document.getElementById('task1Result').textContent = 'Spróbuj ponownie!';
        document.getElementById('task1Result').style.color = 'red';
    }
}

function checkTask2() {
    const userCode = document.getElementById('task2Input').value.trim();
    const correctCode = 'int Add(int a, int b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task2Result').textContent = 'Zadania wykonane!';
        document.getElementById('task2Result').style.color = 'green';
    } else {
        document.getElementById('task2Result').textContent = 'Spróbuj ponownie!';
        document.getElementById('task2Result').style.color = 'red';
    }
}

function checkTask3() {
    const userCode = document.getElementById('task3Input').value.trim();
    const correctCode = 'bool IsEven(int number) { return number % 2 == 0; }';
    
    if (userCode === correctCode) {
        document.getElementById('task3Result').textContent = 'Zadania wykonane!';
        document.getElementById('task3Result').style.color = 'green';
    } else {
        document.getElementById('task3Result').textContent = 'Spróbuj ponownie!';
        document.getElementById('task3Result').style.color = 'red';
    }
}

function checkTask4() {
    const userCode = document.getElementById('task4Input').value.trim();
    const correctCode = 'for (int i = 1; i <= 10; i++) { Console.WriteLine(i); }';
    
    if (userCode === correctCode) {
        document.getElementById('task4Result').textContent = 'Zadania wykonane!';
        document.getElementById('task4Result').style.color = 'green';
    } else {
        document.getElementById('task4Result').textContent = 'Spróbuj ponownie!';
        document.getElementById('task4Result').style.color = 'red';
    }
}

function checkTask5() {
    const userCode = document.getElementById('task5Input').value.trim();
    const correctCode = 'background-color: lightblue;';
    
    if (userCode === correctCode) {
        document.getElementById('task5Result').textContent = 'Zadania wykonane!';
        document.getElementById('task5Result').style.color = 'green';
    } else {
        document.getElementById('task5Result').textContent = 'Spróbuj ponownie!';
        document.getElementById('task5Result').style.color = 'red';
    }
}

// Continue creating checkTask functions for other tasks...

// Funkcja do sprawdzania szerokości okna i ukrywania/wyświetlania elementu
function checkWindowSize() {
    const element = document.getElementById('your-element');
    const screenWidth = window.innerWidth; // Pobieramy szerokość okna przeglądarki (viewport)
    
    // Sprawdzamy, czy szerokość okna jest mniejsza niż 40% szerokości
    if (screenWidth < window.screen.width * 0.40) {
        element.style.display = 'none'; // Ukrywa element
    } 
    // Sprawdzamy, czy szerokość okna to telefon (np. iPhone 12 Mini, które ma szerokość 360px)
    else if (screenWidth <= 480) { // Dla telefonów, zakładając szerokość mniejszą lub równą 480px
        element.style.display = 'none'; // Ukrywa element na urządzeniach mobilnych
    } else {
        element.style.display = 'block'; // Pokazuje element
    }
}

// Wywołaj funkcję przy załadowaniu strony oraz przy każdym zdarzeniu zmiany rozmiaru okna
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
