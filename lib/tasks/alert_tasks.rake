desc 'send an alert'
task send_alert: :environment do
  AlertScheduler.check_and_send_alert
end
