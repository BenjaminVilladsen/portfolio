<template>
    <div class="moneyMonth">
        <div class="monthlyIncome">
            <input class="monthly-income" type="number" v-model="monthlyIncome" placeholder="Monthly Income" v-on:keyup.enter="update">
        </div>
        <div class="days" v-if="incomeAdded">
            <div class="day" v-for="day in monthDays" :key="day.value">
                <p class="header">{{day.name}}</p>
                <p class="date">{{day.date}}</p>
                <div class="money-line">
                  <input type="number" v-model="day.money" v-on:keyup.enter="updateOne(day.value)">
                  <button @click="resetDay(day)">Reset</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      monthDays: [],
      monthlyIncome: 0,
      incomeAdded: false

    }
  },
  created () {
    this.monthDays = this.initializeMonth()
  },
  methods: {
    // create list of all days of the current month as an object with name and value
    initializeMonth () {
      const month = new Date().getMonth()
      const year = new Date().getFullYear()
      const daysInMonth = new Date(year, month, 0).getDate()
      const monthArray = []
      for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(year, month, i)
        const dayName = day.toLocaleString('en-us', { weekday: 'long' })
        const dayValue = day.getDate()
        const dayObject = {
          name: dayName,
          value: dayValue,
          date: day.toDateString(),
          money: 0,
          edited: false
        }
        monthArray.push(dayObject)
        console.log(dayObject.name)
      }
      return monthArray
    },
    update () {
      this.incomeAdded = true
      const tempMonth = this.monthDays
      let completedDays = 0

      let totalSpent = 0
      for (const d of tempMonth) {
        if (d.edited === true) {
          completedDays += 1
          totalSpent += d.money
        }
      }

      tempMonth.forEach(day => {
        if (day.edited === false) {
          day.money = (this.monthlyIncome - totalSpent) / (this.monthDays.length - completedDays)
        }
      })
      this.monthDays = tempMonth
    },
    updateOne (day) {
      for (let i = 0; i < this.monthDays.length; i++) {
        if (this.monthDays[i].value === day) {
          this.monthDays[i].edited = true
        }
      }
      this.update()
    },
    resetDay (day) {
      day.edited = false
      day.money = 0
      this.update()
    }
  }

}

</script>

<style scoped>

.monthly-income{
  display: block;
}

.moneyMonth{
    padding-top: 50px;
     padding-bottom: 200px;
    width: 100%;
    min-height: 100vh;
    background: #405a7475;
    margin: 0px;
}
.monthlyIncome{
    width: 100%;
    height: 100px;
    background: #405a74;
    display: flex;
    justify-content: center;
    align-items: center;

}
.monthlyIncome input{
    width: 200px;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
}
.days{
    border-radius: 15px;
    background: #405a74;
    margin: 10px auto;
    padding: 30px;
    max-width: 1000px;
    border-radius: 15px;
}
.day{
    margin: 10px;
    border-radius: 15px;
    background: #ffffff;
    text-align: left;
    min-width: 200px;
    width: 22.2%;
    display: inline-block;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #405a7475;
}
.header{
    font-size: 20px;
    font-weight: 600;
    margin: 0px;

}
.date{
    font-size: 12px;
    color: #405a74;
}
.money-line input{
  display: inline-block;

}
.money-line button{
  display: inline-block;
}

</style>
