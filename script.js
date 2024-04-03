const os= require('os');
const fs=require('fs');
const data = {
    os: {
      cpuUses: os.cpus(),
      architecture: os.arch(),
      hostname: os.hostname()

    },
    process: {
      version : process.version,
      platform: process.platform,
      cpuUsages: process.cpuUsage()

    },
  };

try {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  console.log('Data written to data.json successfully.');
} catch (error) {
  console.error('Error writing data to file:', error.message);
}
