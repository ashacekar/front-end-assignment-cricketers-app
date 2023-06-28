export const convertMilliSecondsToAge = (ms:number) => {
    const playerDob = new Date(ms);
    const currTimestamp = new Date();
    let age = currTimestamp.getFullYear() - playerDob.getFullYear();
    let m = currTimestamp.getMonth() - playerDob.getMonth();
    if (m < 0 || (m === 0 && currTimestamp.getDate() < playerDob.getDate())) {
        age--;
    }
    return age;
  }