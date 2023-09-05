
document.addEventListener('DOMContentLoaded', function () {
  const barCtx = document.getElementById('barChart').getContext('2d');
  const pieCtx = document.getElementById('pieChart').getContext('2d');

  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'React'],
      datasets: [{
        label: 'Skill Level',
        data: [50, 55, 45, 65, 0],
        backgroundColor: 'RGBA( 255, 215, 0, 1 )',
        borderColor: 'RGBA( 139, 0, 0, 1 )',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Work', 'Study', 'Hobbies', 'Sleep'],
      datasets: [{
        data: [40, 35, 15, 10],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
      }]
    }
  });
});