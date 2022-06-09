pipeline {
  agent any
  tools { 
    nodejs "NodeJS" 
  }
  stages {
    stage('Build') {
      steps {
        echo 'Running build automation'
        sh 'npm install'
        sh 'npm run build'
        archiveArtifacts artifacts: 'build/'
      }
    }
  }
}

// pipeline {
//   agent any
//   tools {
//     nodejs "NodeJS"
//   }
//   stages {
//     stage('Build') {
//       steps {
//         echo 'Running build automation'
//         sh 'npm install'
//         sh 'npm run build'
//         archiveArtifacts artifacts: 'build/'
//       }
//     }
//     stage('Deploy to Stage') {
//       when {
//         branch master
//       }
//       steps {
//         withCredentials([sshUserPrivateKey(credentialsId: '2d10372c-2bfb-4335-b977-859fbe809ed0', usernameVariable: 'USERNAME', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS')]) {
//           sshPublisher(
//             failOnError: true,
//             continueOnError: false,
//             publishers: [
//               configName: 'production',
//               sshCredentials: [
//                 username: "$USERNAME",
//                 key: "$KEY",
//                 encryptedPassphrase: "$USERPASS"
//               ],
//               transfers: [
//                 sourceFiles: 'build',
//                 remoteDirectory: '/tmp',
//                 execCommand: 'rm -rf ~/target/* && cp -r ~/tmp/. ~/target/ && rm -rf ~/tmp/*'
//               ]
//             ]
//           )
//         }
//       }
//     }
//   }
// }
