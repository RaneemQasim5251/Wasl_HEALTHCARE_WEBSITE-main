 function showSchedule2(date2) {
        const scheduleDiv2 = document.getElementById('schedule2');
        let scheduleHtml2 = '';
    
        switch(date2) {
            case '1':
                scheduleHtml2 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 11:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '2':
                scheduleHtml2 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 100 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 11:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml2 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv2.innerHTML = scheduleHtml2;
    }
    
    function showSchedule3(date3) {
        const scheduleDiv3 = document.getElementById('schedule3');
        let scheduleHtml3 = '';
    
        switch(date3) {
            case '11':
                scheduleHtml3 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 50 ر.س</p>
                        <p>الطبيب متاح في <strong>11-مايو-2024 12:50 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 50 ر.س</p>
                        <p>الطبيب متاح في <strong>11-مايو-2024 2:45 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '12':
                scheduleHtml3 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 50 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 12:50 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 50 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 2:45 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 100 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 4:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml3 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv3.innerHTML = scheduleHtml3;
    }
    
    function showSchedule4(date4) {
        const scheduleDiv4 = document.getElementById('schedule4');
        let scheduleHtml4 = '';
    
        switch(date4) {
            case '18':
                scheduleHtml4 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 100 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 100 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 3:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '19':
                scheduleHtml4 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>19-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>19-مايو-2024 3:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 95 ر.س</p>
                        <p>الطبيب متاح في <strong>19-مايو-2024 5:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml4 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv4.innerHTML = scheduleHtml4;
    }
    
    function showSchedule5(date5) {
        const scheduleDiv5 = document.getElementById('schedule5');
        let scheduleHtml5 = '';
    
        switch(date5) {
            case '1':
                scheduleHtml5 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 4:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '2':
                scheduleHtml5 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 2:15 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 8:15 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml5 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv5.innerHTML = scheduleHtml5;
    }

    
    function showSchedule6(date6) {
        const scheduleDiv6 = document.getElementById('schedule6');
        let scheduleHtml6 = '';
    
        switch(date6) {
            case '26':
                scheduleHtml6 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 70 ر.س</p>
                        <p>الطبيب متاح في <strong>26-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 70 ر.س</p>
                        <p>الطبيب متاح في <strong>26-مايو-2024 5:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '27':
                scheduleHtml6 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 70 ر.س</p>
                        <p>الطبيب متاح في <strong>27-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 70 ر.س</p>
                        <p>الطبيب متاح في <strong>27-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 100 ر.س</p>
                        <p>الطبيب متاح في <strong>27-مايو-2024 6:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml6 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv6.innerHTML = scheduleHtml6;
    }
    
    function showSchedule7(date7) {
        const scheduleDiv7 = document.getElementById('schedule7');
        let scheduleHtml7 = '';
    
        switch(date7) {
            case '4':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '15':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 60 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml7 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv7.innerHTML = scheduleHtml7;
    }
    
    function showSchedule8(date8) {
        const scheduleDiv8 = document.getElementById('schedule8');
        let scheduleHtml8 = '';
    
        switch(date8) {
            case '9':
                scheduleHtml8 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>9-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>9-مايو-2024 11:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '10':
                scheduleHtml8 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 90 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 7:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml8 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv8.innerHTML = scheduleHtml8;
    }
    
    function showSchedule9(date9) {
        const scheduleDiv9 = document.getElementById('schedule9');
        let scheduleHtml9 = '';
    
        switch(date9) {
            case '10':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 10:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '12':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 75 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 50 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 3:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة فيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml9 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv9.innerHTML = scheduleHtml9;
    }
    
    function showSchedule10(date10) {
        const scheduleDiv10 = document.getElementById('schedule10');
        let scheduleHtml10 = '';
    
        switch(date10) {
            case '17':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>17-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>17-مايو-2024 5:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '18':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 300 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 8:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml10 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv10.innerHTML = scheduleHtml10;
    }
    
    function showSchedule1(date1) {
        const scheduleDiv1 = document.getElementById('schedule1');
        let scheduleHtml1 = '';
    
        switch(date1) {
            case '20':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>20-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>20-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '21':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 300 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 4:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml1 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv1.innerHTML = scheduleHtml1;
    }
    
    function showSchedule7(date7) {
        const scheduleDiv7 = document.getElementById('schedule7');
        let scheduleHtml7 = '';
    
        switch(date7) {
            case '4':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '15':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml7 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv7.innerHTML = scheduleHtml7;
    }
    
        
    function showSchedule8(date8) {
        const scheduleDiv8 = document.getElementById('schedule8');
        let scheduleHtml8 = '';
    
        switch(date8) {
            case '9':
                scheduleHtml8 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 350 ر.س</p>
                        <p>الطبيب متاح في <strong>9-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 350 ر.س</p>
                        <p>الطبيب متاح في <strong>9-مايو-2024 11:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '10':
                scheduleHtml8 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 350 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 350 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 350 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 7:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml8 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv8.innerHTML = scheduleHtml8;
    }
    
    function showSchedule9(date9) {
        const scheduleDiv9 = document.getElementById('schedule9');
        let scheduleHtml9 = '';
    
        switch(date9) {
            case '10':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 10:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>10-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '12':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 150 ر.س</p>
                        <p>الطبيب متاح في <strong>12-مايو-2024 3:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml9 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv9.innerHTML = scheduleHtml9;
    }
    
    function showSchedule10(date10) {
        const scheduleDiv10 = document.getElementById('schedule10');
        let scheduleHtml10 = '';
    
        switch(date10) {
            case '17':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>17-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>17-مايو-2024 5:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '18':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>18-مايو-2024 8:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml10 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv10.innerHTML = scheduleHtml10;
    }
    
    function showSchedule11(date11) {
        const scheduleDiv11 = document.getElementById('schedule11');
        let scheduleHtml11 = '';
    
        switch(date11) {
            case '1':
                scheduleHtml11 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 11:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>1-مايو-2024 1:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '2':
                scheduleHtml11 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 11:40 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 300 ر.س</p>
                        <p>الطبيب متاح في <strong>2-مايو-2024 9:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml11 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv11.innerHTML = scheduleHtml11;
    }
    
    function showSchedule12(date12) {
        const scheduleDiv12 = document.getElementById('schedule12');
        let scheduleHtml12 = '';
    
        switch(date12) {
            case '21':
                scheduleHtml12 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 240 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 9:00 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 240 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 9:00 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '22':
                scheduleHtml12 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 240 ر.س</p>
                        <p>الطبيب متاح في <strong>22-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 240 ر.س</p>
                        <p>الطبيب متاح في <strong>22-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 340 ر.س</p>
                        <p>الطبيب متاح في <strong>22-مايو-2024 4:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml12 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv12.innerHTML = scheduleHtml12;
    }
    
    function showSchedule1(date1) {
        const scheduleDiv1 = document.getElementById('schedule1');
        let scheduleHtml1 = '';
    
        switch(date1) {
            case '20':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>20-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>20-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '21':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 300 ر.س</p>
                        <p>الطبيب متاح في <strong>21-مايو-2024 4:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml1 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv1.innerHTML = scheduleHtml1;
    }
    
    function showSchedule7(date7) {
        const scheduleDiv7 = document.getElementById('schedule7');
        let scheduleHtml7 = '';
    
        switch(date7) {
            case '4':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك عبد العزيز، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>4-مايو-2024 2:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                `;
                break;
            case '15':
                scheduleHtml7 = `
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 12:40 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <h3>مستشفى الملك فيصل، الطائف</h3>
                        <p>رسوم الاستشارة: 200 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 مساءً</strong></p>
                        <a href="appointment.html"><button class="consult-button">حجز استشارة في المستشفى</button></a>
                    </div>
                    <div class="consultation">
                        <p>رسوم الاستشارة: 250 ر.س</p>
                        <p>الطبيب متاح في <strong>15-مايو-2024 2:00 صباحًا</strong></p>
                        <a href="appointment.html"><button class="consult-button">استشارة عبر الفيديو</button></a>
                    </div>
                `;
                break;
            default:
                scheduleHtml7 = '<p>لا توجد مواعيد متاحة في هذا التاريخ.</p>';
        }
    
        scheduleDiv7.innerHTML = scheduleHtml7;
    }
    