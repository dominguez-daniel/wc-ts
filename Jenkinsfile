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
//   }
// }

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
    stage('Deploy to Stage') {
      when {
        branch master
      }
      steps {
        // Access credentials in Jenkins
        withCredentials([sshUserPrivateKey(credentialsId: '2d10372c-2bfb-4335-b977-859fbe809ed0', usernameVariable: 'USERNAME', keyFileVariable: 'KEY', passphraseVariable: 'USERPASS')]) {
          sshPublisher(
            failOnError: true,
            continueOnError: false,
            publishers: [
              // Publisher description includes the name of your server, and the credentials to access it.
              sshPublisherDesc(
                configName: 'production',
                sshCredentials: [
                  username: "$USERNAME",
                  key: "$KEY",
                  encryptedPassphrase: "$USERPASS"
                ],
                transfers: [
                  sshTransfer(
                    sourceFiles: 'build',
                    // take archived dir 'build' and copy it to tmp dir
                    remoteDirectory: '/tmp',
                    // remove what is currently in target, and copy over what was moved into tmp to target and delete tmp's contents
                    execCommand: 'rm -rf ~/target/* && cp -r ~/tmp/. ~/target/ && rm -rf ~/tmp/*'
                  )
                ]
              )
            ]
          )
        }
      }
    }
  }
}
