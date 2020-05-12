import moment from 'moment'

const salutation = () => {
    moment.locale()
    const hour = parseInt(moment().format('HH'))
    
    // Determine which segment of the day it is
    let segment = (t: number): string => {
        if (t < 12) return 'morning'
        if (t >= 12 && t <= 17) return 'afternoon'
        if (t >= 18) return 'evening'        
        return 'night'
    }

    // Determine an approximate light level
    let lightLevel = (t: number): string => {
        if (t > 10 && t < 6) return 'darkness'
        if (t >= 18 && t <= 21) return 'sunset'        
        if (t >= 6 && t <= 9) return 'sunrise'        
        return 'daylight'
    }

    return { 
        segment: segment(hour),
        lightLevel: lightLevel(hour)
    }
}

export default salutation