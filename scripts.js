let root = document.documentElement
var boat_position = 0

var time_left = 51
document.getElementById('time_left').innerHTML =
  time_left.toString() + ' Seconds'

var update_time = function () {
  time_left = time_left - 1
  document.getElementById('time_left').innerHTML =
    time_left.toString() + ' Seconds'
  if (time_left == 0) {
    clearInterval(timer_update)
    root.style.setProperty('--timer', 'red')
    document.getElementById('time_left').innerHTML = 'Timeout!'
  }
}

var timer_update = setInterval(update_time, 1000)

// lets play button
document.getElementById('unhide').onclick = function () {
  root.style.setProperty('--op_hide', 1.0)
  time_left = 51
  document.getElementById('time_left').innerHTML =
    time_left.toString() + ' Seconds'
  timer_update()
}

// to_right,to_left button // it will allow to change the position of boat

document.getElementById('to_right').onclick = function () {
  if (
    document.getElementById('boat1member').innerHTML != '______' ||
    document.getElementById('boat2member').innerHTML != '______'
  ) {
    boat_position = 1
    root.style.setProperty('--x_y', 765 + 'px')
  }
  var monsters_left = 0
  var men_left = 0
  if (document.getElementById('ml1').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('ml2').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('ml3').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('dl1').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('dl2').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('dl3').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('boat1member').innerHTML == '_Devil_') {
    monsters_right += 1
  }
  if (document.getElementById('boat2member').innerHTML == '_Devil_') {
    monsters_right += 1
  }
  if (document.getElementById('boat1member').innerHTML == '__Man_') {
    men_right += 1
  }
  if (document.getElementById('boat2member').innerHTML == '__Man_') {
    men_right += 1
  }
  var monsters_right = 3 - monsters_left
  var men_right = 3 - men_left
  if (men_right == 3 && monsters_right == 3) {
    clearInterval(timer_update)
    root.style.setProperty('--timer', 'green')
    document.getElementById('time_left').innerHTML = 'You Won!'
  }
  if (
    (men_left > 0 && monsters_left > men_left) ||
    (men_right > 0 && monsters_right > men_right)
  ) {
    clearInterval(timer_update)
    root.style.setProperty('--timer', 'red')
    document.getElementById('time_left').innerHTML = 'You Lost!'
  }
}

document.getElementById('to_left').onclick = function () {
  if (
    document.getElementById('boat1member').innerHTML != '______' ||
    document.getElementById('boat2member').innerHTML != '______'
  ) {
    boat_position = 0
    root.style.setProperty('--x_y', 450 + 'px')
  }

  var monsters_left = 0
  var men_left = 0
  if (document.getElementById('ml1').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('ml2').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('ml3').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('dl1').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('dl2').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('dl3').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('boat1member').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('boat2member').innerHTML == '_Devil_') {
    monsters_left += 1
  }
  if (document.getElementById('boat1member').innerHTML == '__Man_') {
    men_left += 1
  }
  if (document.getElementById('boat2member').innerHTML == '__Man_') {
    men_left += 1
  }
  var monsters_right = 3 - monsters_left
  var men_right = 3 - men_left
  if (men_right == 3 && monsters_right == 3) {
    clearInterval(timer_update)
    root.style.setProperty('--timer', 'green')
    document.getElementById('time_left').innerHTML = 'You Won!'
  }
  if (
    (men_left > 0 && monsters_left > men_left) ||
    (men_right > 0 && monsters_right > men_right)
  ) {
    clearInterval(timer_update)
    root.style.setProperty('--timer', 'red')
    document.getElementById('time_left').innerHTML = 'You Lost!'
  }
  console.log(men_left," hello ",monsters_left)
}

// boat buttons

document.getElementById('boat1').onclick = function () {
  console.log(boat_position)
  if (boat_position == 0) {
    if (document.getElementById('boat1member').innerHTML == '__Man_') {
      if (document.getElementById('ml1').innerHTML == '______') {
        document.getElementById('ml1').innerHTML = '__Man_'
      } else if (document.getElementById('ml2').innerHTML == '______') {
        document.getElementById('ml2').innerHTML = '__Man_'
      } else if (document.getElementById('ml3').innerHTML == '______') {
        document.getElementById('ml3').innerHTML = '__Man_'
      }
      document.getElementById('boat1member').innerHTML = '______'
    } else if (document.getElementById('boat1member').innerHTML == '_Devil_') {
      if (document.getElementById('dl1').innerHTML == '______') {
        document.getElementById('dl1').innerHTML = '_Devil_'
      } else if (document.getElementById('dl2').innerHTML == '______') {
        document.getElementById('dl2').innerHTML = '_Devil_'
      } else if (document.getElementById('dl3').innerHTML == '______') {
        document.getElementById('dl3').innerHTML = '_Devil_'
      }
      document.getElementById('boat1member').innerHTML = '______'
    }
  } else {
    if (document.getElementById('boat1member').innerHTML == '__Man_') {
      if (document.getElementById('mr1').innerHTML == '______') {
        document.getElementById('mr1').innerHTML = '__Man_'
      } else if (document.getElementById('mr2').innerHTML == '______') {
        document.getElementById('mr2').innerHTML = '__Man_'
      } else if (document.getElementById('mr3').innerHTML == '______') {
        document.getElementById('mr3').innerHTML = '__Man_'
      }
      document.getElementById('boat1member').innerHTML = '______'
    } else if (document.getElementById('boat1member').innerHTML == '_Devil_') {
      if (document.getElementById('dr1').innerHTML == '______') {
        document.getElementById('dr1').innerHTML = '_Devil_'
      } else if (document.getElementById('dr2').innerHTML == '______') {
        document.getElementById('dr2').innerHTML = '_Devil_'
      } else if (document.getElementById('dr3').innerHTML == '______') {
        document.getElementById('dr3').innerHTML = '_Devil_'
      }
      document.getElementById('boat1member').innerHTML = '______'
    }
  }
}

document.getElementById('boat2').onclick = function () {
  console.log(boat_position)
  if (boat_position == 0) {
    if (document.getElementById('boat2member').innerHTML == '__Man_') {
      if (document.getElementById('ml1').innerHTML == '______') {
        document.getElementById('ml1').innerHTML = '__Man_'
      } else if (document.getElementById('ml2').innerHTML == '______') {
        document.getElementById('ml2').innerHTML = '__Man_'
      } else if (document.getElementById('ml3').innerHTML == '______') {
        document.getElementById('ml3').innerHTML = '__Man_'
      }
      document.getElementById('boat2member').innerHTML = '______'
    } else if (document.getElementById('boat2member').innerHTML == '_Devil_') {
      if (document.getElementById('dl1').innerHTML == '______') {
        document.getElementById('dl1').innerHTML = '_Devil_'
      } else if (document.getElementById('dl2').innerHTML == '______') {
        document.getElementById('dl2').innerHTML = '_Devil_'
      } else if (document.getElementById('dl3').innerHTML == '______') {
        document.getElementById('dl3').innerHTML = '_Devil_'
      }
      document.getElementById('boat2member').innerHTML = '______'
    }
  } else {
    if (document.getElementById('boat2member').innerHTML == '__Man_') {
      if (document.getElementById('mr1').innerHTML == '______') {
        document.getElementById('mr1').innerHTML = '__Man_'
      } else if (document.getElementById('mr2').innerHTML == '______') {
        document.getElementById('mr2').innerHTML = '__Man_'
      } else if (document.getElementById('mr3').innerHTML == '______') {
        document.getElementById('mr3').innerHTML = '__Man_'
      }
      document.getElementById('boat2member').innerHTML = '______'
    } else if (document.getElementById('boat2member').innerHTML == '_Devil_') {
      if (document.getElementById('dr1').innerHTML == '______') {
        document.getElementById('dr1').innerHTML = '_Devil_'
      } else if (document.getElementById('dr2').innerHTML == '______') {
        document.getElementById('dr2').innerHTML = '_Devil_'
      } else if (document.getElementById('dr3').innerHTML == '______') {
        document.getElementById('dr3').innerHTML = '_Devil_'
      }
      document.getElementById('boat2member').innerHTML = '______'
    }
  }
}

// button 1, left

document.getElementById('btnml1').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('ml1').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('ml1').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('ml1').innerHTML
    }
    document.getElementById('ml1').innerHTML = '______'
  }
}

// button 2, left

document.getElementById('btnml2').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('ml2').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('ml2').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('ml2').innerHTML
    }
    document.getElementById('ml2').innerHTML = '______'
  }
}

// button 3, left

document.getElementById('btnml3').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('ml3').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('ml3').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('ml3').innerHTML
    }
    document.getElementById('ml3').innerHTML = '______'
  }
}

// button 4, left

document.getElementById('btndl1').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('dl1').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dl1').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dl1').innerHTML
    }
    document.getElementById('dl1').innerHTML = '______'
  }
}

// button 5, left

document.getElementById('btndl2').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('dl2').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dl2').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dl2').innerHTML
    }
    document.getElementById('dl2').innerHTML = '______'
  }
}

// button 6, left

document.getElementById('btndl3').onclick = function () {
  if (
    boat_position == 0 &&
    document.getElementById('dl3').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dl3').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dl3').innerHTML
    }
    document.getElementById('dl3').innerHTML = '______'
  }
}
console.log(ml1.innerHTML)

// button 1, right

document.getElementById('btnmr1').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('mr1').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('mr1').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('mr1').innerHTML
    }
    document.getElementById('mr1').innerHTML = '______'
  }
}

// button 2, right

document.getElementById('btnmr2').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('mr2').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('mr2').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('mr2').innerHTML
    }
    document.getElementById('mr2').innerHTML = '______'
  }
}

// button 3, right

document.getElementById('btnmr3').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('mr3').innerHTML == '__Man_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('mr3').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('ml3').innerHTML
    }
    document.getElementById('mr3').innerHTML = '______'
  }
}

// button 4, right

document.getElementById('btndr1').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('dr1').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dr1').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dr1').innerHTML
    }
    document.getElementById('dr1').innerHTML = '______'
  }
}

// button 5, right

document.getElementById('btndr2').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('dl2').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dr2').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dr2').innerHTML
    }
    document.getElementById('dr2').innerHTML = '______'
  }
}

// button 6, right

document.getElementById('btndr3').onclick = function () {
  if (
    boat_position == 1 &&
    document.getElementById('dr3').innerHTML == '_Devil_' &&
    (document.getElementById('boat1member').innerHTML == '______' ||
      document.getElementById('boat2member').innerHTML == '______')
  ) {
    if (document.getElementById('boat1member').innerHTML == '______') {
      document.getElementById(
        'boat1member',
      ).innerHTML = document.getElementById('dr3').innerHTML
    } else {
      document.getElementById(
        'boat2member',
      ).innerHTML = document.getElementById('dr3').innerHTML
    }
    document.getElementById('dr3').innerHTML = '______'
  }
}
