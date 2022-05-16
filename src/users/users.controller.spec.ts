import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should take an id as param', () => {
    const appController = module.get(UsersController);
    expect(appController.getUserById(1)).toBe('user 1');
  });

  describe('user creation process', () => {
    it('has an endpoint waiting for the user data', () => {
      const appController = module.get(UsersController);
      expect(appController.createUser()).toBeDefined;
    });

    it('takes user data', () => {
      const appController = module.get(UsersController);
      expect(appController.createUser()).toBeDefined;
    });
  });
});
