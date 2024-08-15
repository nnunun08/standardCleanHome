const datepicker = document.getElementById('datepicker');
const datepicker2 = document.getElementById('datepicker2');
const datepicker3 = document.getElementById('datepicker3');
const datepicker4 = document.getElementById('datepicker4');
const monthDatepicker = document.getElementById('monthDatepicker');
// const startDateInput = document.getElementById('startDate');
// const endDateInput = document.getElementById('endDate');

function handleDateChange(selectedDates, dateStr, instance) {
    console.log('선택된 날짜:', dateStr);
}

flatpickr(datepicker, {
    mode: 'range',
    dateFormat: 'Y-m-d H:i', // 날짜 및 시간 형식 설정 (예: 2023-09-12 15:30)
    enableTime: false,        // 시간 선택 활성화
    time_24hr: false,         // 24시간 형식 사용
    // minDate: 'today',        // 오늘 이전 날짜 선택 비활성화
    defaultDate: 'today',    // 초기 날짜 설정 (현재 날짜와 시간)
    locale: 'ko',            // 한국어로 지역화
    onOpen: function(selectedDates, dateStr, instance) {
        // 위젯이 열릴 때 실행할 코드
    },
    onClose: function(selectedDates, dateStr, instance) {
        // 위젯이 닫힐 때 실행할 코드
    },
    onChange: function(selectedDates, dateStr, instance) {
        // 날짜가 변경될 때 실행할 코드
    },
    disableMobile: true,      // 모바일 기기에서 위젯 비활성화
    altInput: true,           // 추가 입력란 활성화
    // altFormat: 'F j, Y H:i', // 추가 입력란의 날짜 및 시간 형식
});


flatpickr([datepicker2, datepicker3, datepicker4], {
    // mode: 'range',
    dateFormat: 'Y-m-d H:i', // 날짜 및 시간 형식 설정 (예: 2023-09-12 15:30)
    // enableTime: false,        // 시간 선택 활성화
    time_24hr: false,         // 24시간 형식 사용
    // minDate: 'today',        // 오늘 이전 날짜 선택 비활성화
    defaultDate: 'today',    // 초기 날짜 설정 (현재 날짜와 시간)
    locale: 'ko',            // 한국어로 지역화
    onOpen: function(selectedDates, dateStr, instance) {
        // 위젯이 열릴 때 실행할 코드
    },
    onClose: function(selectedDates, dateStr, instance) {
        // 위젯이 닫힐 때 실행할 코드
    },
    onChange: function(selectedDates, dateStr, instance) {
        // 날짜가 변경될 때 실행할 코드
    },
    disableMobile: true,      // 모바일 기기에서 위젯 비활성화
    altInput: true,           // 추가 입력란 활성화
    // altFormat: 'F j, Y H:i', // 추가 입력란의 날짜 및 시간 형식
});


flatpickr([monthDatepicker], {
    // mode: 'range',
    dateFormat: 'Y-m', // 날짜 및 시간 형식 설정 (예: 2023-09-12 15:30)
    // enableTime: false,        // 시간 선택 활성화
    time_24hr: false,         // 24시간 형식 사용
    // minDate: 'today',        // 오늘 이전 날짜 선택 비활성화
    defaultDate: 'today',    // 초기 날짜 설정 (현재 날짜와 시간)
    locale: 'ko',            // 한국어로 지역화
    onOpen: function(selectedDates, dateStr, instance) {
        // 위젯이 열릴 때 실행할 코드
    },
    onClose: function(selectedDates, dateStr, instance) {
        // 위젯이 닫힐 때 실행할 코드
    },
    onChange: function(selectedDates, dateStr, instance) {
        // 날짜가 변경될 때 실행할 코드
    },
    disableMobile: true,      // 모바일 기기에서 위젯 비활성화
    altInput: true,           // 추가 입력란 활성화
    // altFormat: 'F j, Y H:i', // 추가 입력란의 날짜 및 시간 형식
});
