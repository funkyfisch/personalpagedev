<template>
  <div style="position:absolute;width:100%;height:100%">
    <div id="bg-sky">
      </div>
    <div style="position:relative;" id="solar-system">
    </div>
    <p style="color:red;"> Coming soon...</p>
  </div>
</template>

<script>
import Two from '@/../lib/twojs/two.js'
export default {
  name: 'PlanetOrbits',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.drawSky()
    this.drawSystem()
  },
  methods: {
    drawSky () {
      var el = document.getElementById('bg-sky')
      var two = new Two({fullscreen: true}).appendTo(el)
      var sky = two.makeRectangle(0, 0, 100, 100)
      var r = 2
      var g = 2
      var b = 2
      sky.fill = 'rgb(' + r + ',' + g + ',' + b + ')'
      sky.scale = 100
      two.bind('update', function (frameCount) {
        if (sky.fill === 'rgb(30,30,58)') {
          r = 6
          g = 6
          b = 10
        }
        if (frameCount % 10 === 0) {
          r++
          g++
          b += 2
        }
        sky.fill = 'rgb(' + r + ',' + g + ',' + b + ')'
      })
      two.play()
    },
    drawSystem () {
      var el = document.getElementById('solar-system')
      var two = new Two({fullscreen: true}).appendTo(el)

      function getEarthPosition (angle, orbit) {
        return {
          x: Math.sin(angle * Math.PI / 180) * orbit,
          y: Math.cos(angle * Math.PI / 180) * orbit
        }
      }
      function getMoonPosition (angle, orbit) {
        return {
          x: Math.sin(angle * Math.PI / 180) * orbit,
          y: Math.cos(angle * Math.PI / 180) * orbit
        }
      }

      var earthAngle = 0
      var moonAngle = 0
      var distance = 30
      var radius = 35
      var padding = 200
      var orbit = 200
      var offset = orbit + padding
      var orbits = two.makeGroup()

      var text = two.makeText('Coming soon', offset * 1.8 - 70, 100)
      text.size = 22
      text.fill = '#ccc'
      text.family = 'Courier'
      text.alignment = 'left'

      var sol = two.makeCircle(offset * 1.8, offset, 40)
      sol.linewidth = 0
      sol.fill = 'yellow'

      var earthPos = getEarthPosition(earthAngle++, orbit)
      var earth = two.makeCircle(earthPos.x + offset * 1.8, earthPos.y + offset, 30)
      earth.fill = '#194878'
      earth.stroke = ''

      var earthOrbit = two.makeCircle(offset * 1.8, offset, orbit)
      earthOrbit.noFill()
      earthOrbit.linewidth = 2
      earthOrbit.stroke = '#ccc'
      orbits.add(earthOrbit)

      var moonPos = getMoonPosition(moonAngle, radius + distance)
      var moon = two.makeCircle(earth.translation.x + moonPos.x, earth.translation.y + moonPos.y, radius / 4)
      moon.fill = '#cfcfcf'
      moon.stroke = ''

      var moonOrbit = two.makeCircle(earth.translation.x, earth.translation.y, radius + distance)
      moonOrbit.noFill()
      moonOrbit.linewidth = 2
      moonOrbit.stroke = '#ccc'
      orbits.add(moonOrbit)

      var coeff = 2
      two.bind('update', function (frameCount) {
        // updateWorld()
        // updateSun()
        // updateEarth()
        // updateMoon()
        if (frameCount % 60 === 1) {
          text.value += '.'
        }
        if (text.value === 'Coming soon.....') {
          text.value = 'Coming soon'
        }
        coeff += 0.01
        var pos = getEarthPosition(earthAngle++, orbit)
        moonOrbit.translation.x = earth.translation.x = pos.x + offset * 1.8
        moonOrbit.translation.y = earth.translation.y = pos.y + offset

        var moonPos = getMoonPosition(moonAngle -= 4, radius + distance)
        moon.translation.x = earth.translation.x - moonPos.x
        moon.translation.y = earth.translation.y - moonPos.y
        sol.scale += Math.sin(Math.PI * coeff) / 100
        sol.opacity -= Math.sin(Math.PI * coeff) / 100
      })
      two.play()
    }
  }
}
</script>
<style scoped>

</style>
