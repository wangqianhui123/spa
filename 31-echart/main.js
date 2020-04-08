$(function() {
  var myChart = echarts.init(document.getElementById('main'));
        var xDate = [];
        var yDaye = [];

        for(var i=0;i<=1;i+=0.1){
          xDate.push(i);
          if(i===0||i===1){
          yDate.push(0)
          }else{
          yDate.push(-1*i*Math.log2(i)-(1-i)*Math.log2(1-i));
}
}
 
        var option = {
            title: {
                text: '二进熵函数'
            },
            tooltip: {},
            legend: {
                data:['信息量']
            },
            xAxis: {
                data: xDate
            },
            yAxis: {},
            series: [{
                name: '信息量',
                type: 'line',
                smooth:true,
                data: yDate
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
